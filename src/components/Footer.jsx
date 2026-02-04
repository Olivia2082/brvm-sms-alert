const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} SokoAlerts. Tous droits réservés.</p>
        <p className="text-sm mt-1">Votre source d\'information sur la BRVM.</p>
      </div>
    </footer>
  );
};

export default Footer;