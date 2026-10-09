<?php
// ===== Minimal PHP API with Product class =====

// Database connection
$pdo = new PDO("mysql:host=localhost;dbname=autoshield", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Product class
class Product {
    public function getAll() {
        $stmt = $pdo->query("SELECT id, name, cat, price, old, image FROM products ORDER BY createdAt DESC");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function getById($id) {
        $stmt = $pdo->prepare("SELECT id, name, cat, price, old, image FROM products WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
    
    public function create($name, $cat, $price, $old, $image) {
        $stmt = $pdo->prepare("INSERT INTO products (name, cat, price, old, image) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssdii", $name, $cat, $price, $old, $image);
        $stmt->execute();
        return $pdo->lastInsertId();
    }
    
    public function update($id, $name, $cat, $price, $old, $image) {
        $stmt = $pdo->prepare("UPDATE products SET name = ?, cat = ?, price = ?, old = ?, image = ? WHERE id = ?");
        $stmt->bind_param("ssdii", $name, $cat, $price, $old, $image, $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }
    
    public function delete($id) {
        $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->affected_rows;
    }
}

// Initialize product model
$product = new Product();

// Handle API requests
$uri = explode('/', trim($_SERVER["REQUEST_URI"], '/'));
$method = $_SERVER["REQUEST_METHOD"];
$uri = array_filter($uri, function($x) { return !empty($x); });

// Routes: /api/products (GET, POST) and /api/products/{id} (GET, PUT, DELETE)
if ($uri[0] === 'api' && $uri[1] === 'products') {
    $id = isset($uri[2]) ? (int)$uri[2] : null;
    
    if ($method === 'GET') {
        if ($id > 0) {
            $data = $product->getById($id);
            if ($data) echo json_encode(["status" => "success", "product" => $data]);
            else echo json_encode(["status" => "not_found", "message" => "Not found"]);
        } else {
            $data = $product->getAll();
            echo json_encode(["status" => "success", "products" => $data, "count" => count($data)]);
        }
    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data) {
            $newId = $product->create($data["name"] ?? "", $data["cat"] ?? "Car Covers", $data["price"] ?? 0, $data["old"] ?? 0, $data["image"] ?? "default");
            echo json_encode(["status" => "success", "productId" => $newId]);
        } else {
            echo json_encode(["status" => "error", "message" => "No data"]);
        }
    } elseif ($method === 'PUT') {
        if ($id > 0) {
            $data = json_decode(file_get_contents("php://input"), true);
            if ($data) {
                $rows = $product->update($id, $data["name"] ?? "", $data["cat"] ?? "Car Covers", $data["price"] ?? 0, $data["old"] ?? 0, $data["image"] ?? "");
                if ($rows > 0) echo json_encode(["status" => "success", "message" => "Updated"]);
                else echo json_encode(["status" => "not_found"]);
            } else {
                echo json_encode(["status" => "error"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "ID required"]);
        }
    } elseif ($method === 'DELETE') {
        if ($id > 0) {
            $rows = $product->delete($id);
            if ($rows > 0) echo json_encode(["status" => "success", "message" => "Deleted"]);
            else echo json_encode(["status" => "not_found"]);
        } else {
            echo json_encode(["status" => "error", "message" => "ID required"]);
        }
    }
} else {
    // Default: show info
    echo json_encode(["status" => "success", "message" => "API running", "endpoints" => ["/api/products"]]);
}