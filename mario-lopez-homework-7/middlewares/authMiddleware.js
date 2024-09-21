import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Obtén el token del encabezado de autorización
  const authHeader = req.header('Authorization');

  // Si no hay encabezado de autorización o no empieza con 'Bearer', deniega el acceso
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado o incorrecto.' });
  }

  // Extrae el token removiendo el prefijo 'Bearer '
  const token = authHeader.split(' ')[1];

  try {
    // Verifica el token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Almacena la información verificada en req.user
    req.user = verified;
    // Pasa al siguiente middleware o ruta
    next();
  } catch (err) {
    // Si el token no es válido, envía una respuesta de error
    res.status(400).json({ message: 'Token inválido.' });
  }
};

export default authMiddleware;
