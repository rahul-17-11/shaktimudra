import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseAuth } from "../context/Firebase";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
}
