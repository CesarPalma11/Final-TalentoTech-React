import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container py-5">
      <h2>Panel de Administración</h2>
      <Link to="/agregar-producto" className="btn btn-success mt-3">
        ➕ Agregar Producto
      </Link>
      
    </div>
  );
};

export default AdminDashboard;
