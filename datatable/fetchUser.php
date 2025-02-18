<?php
// DB connection
$host = 'localhost'; // your database host
$dbname = 'userLogin'; // your database name
$username = 'ricky'; // your database username
$password = '123'; // your database password

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// DataTables configuration
$columns = array(
    0 => 'id',  // Index 0 for the first column (id)
    1 => 'first_name',  // Index 1 for the second column (first_name)
    2 => 'email',  // Index 2 for the third column (email)
    3 => 'password',  // Index 3 for the fourth column (password)
    4 => 'role'  // Index 4 for the fifth column (role)
);

// Collecting the request parameters
$start = $_GET['start'];  // Offset for the data
$length = $_GET['length'];  // Limit the number of rows
$search_value = $_GET['search']['value'];  // Search term for global search
$order_column = $_GET['order'][0]['column'];  // Column index for sorting
$order_dir = $_GET['order'][0]['dir'];  // Sorting direction (asc/desc)

// Fetching the total records without filtering (for pagination)
$sql_total = "SELECT COUNT(id) FROM user";  // Assuming the table name is 'users'
$result_total = $conn->query($sql_total);
$total_records = $result_total->fetch_row()[0];

// Fetching filtered records for the current page
$sql = "SELECT id, first_name, email, password, role FROM user 
        WHERE first_name LIKE '%$search_value%' OR email LIKE '%$search_value%' OR role LIKE '%$search_value%' 
        ORDER BY " . $columns[$order_column] . " $order_dir 
        LIMIT $start, $length";
        
$result = $conn->query($sql);

// Prepare the data array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Prepare response data
$response = array(
    "draw" => $_GET['draw'],
    "recordsTotal" => $total_records,
    "recordsFiltered" => $total_records,  // This is just an approximation for the filtered count
    "data" => $data
);

// Return the data as JSON
echo json_encode($response);

// Close the connection
$conn->close();
?>
