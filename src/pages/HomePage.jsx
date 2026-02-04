import { useState } from 'react';
import { Bell, ArrowRight, Smartphone, MessageSquare, CheckCircle, BarChart, ShieldCheck, Star } from 'lucide-react';

const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [channel, setChannel] = useState('whatsapp');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setMessage('Veuillez entrer un numéro de téléphone.');
      return;
    }
    setIsLoading(true);
    setMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    // Don't clear phone number to show in dashboard
    setMessage(`Merci ! Vous recevrez bientôt les alertes sur ${channel === 'whatsapp' ? 'WhatsApp' : 'SMS'}.`);
  };

  const lastAlerts = [
    { id: 1, text: 'SONATEL (+2.5%) : Résultats T1 publiés.' },
    { id: 2, text: 'Le marché clôture en hausse de 0.8%.' },
    { id: 3, text: 'ECOBANK CI : Dividende annoncé de 250 FCFA/action.' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <MessageSquare className="mx-auto h-16 w-16 text-green-600 animate-pulse" />
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Alertes BRVM envoyées sur <span className="text-green-600">WhatsApp</span> et SMS.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Ne manquez plus aucune opportunité. Recevez les informations clés du marché boursier régional en temps réel, directement sur votre téléphone.
        </p>
      </div>

      {/* Subscription Form */}
      <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Inscrivez-vous gratuitement</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="channel" className="block text-sm font-medium text-gray-700 mb-2">Canal de réception :</label>
            <div className="flex space-x-4">
              <button type="button" onClick={() => setChannel('whatsapp')} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md border transition-all ${channel === 'whatsapp' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
                <Smartphone className="h-5 w-5 text-green-700" />
                <span className="font-semibold">WhatsApp (Recommandé)</span>
              </button>
              <button type="button" onClick={() => setChannel('sms')} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md border transition-all ${channel === 'sms' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="font-semibold">SMS</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="flex-grow px-4 py-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-bold text-lg px-6 py-3 rounded-md hover:bg-green-700 transition-transform transform hover:scale-105 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Inscription...' : 'Recevoir les alertes BRVM'}</span>
              {!isLoading && <ArrowRight className="h-5 w-5" />}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">En vous inscrivant, vous acceptez de recevoir des messages de notre part. Vous pouvez vous désinscrire à tout moment.</p>
        </form>
        {message && (
          <p className={`mt-4 text-center font-medium ${message.includes('Merci') ? 'text-green-600' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>

      {/* Dashboard Section */}
      {phoneNumber && message.includes('Merci') && (
        <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Votre Tableau de Bord</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
                    <span className="font-medium text-gray-600">Type d'abonnement :</span>
                    <span className="font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">BRVM Essentiel (Gratuit)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
                    <span className="font-medium text-gray-600">Canal actif :</span>
                    <span className="font-bold capitalize">{channel}</span>
                </div>
                <div>
                    <h4 className="font-medium text-gray-600 mb-2">Dernières alertes envoyées :</h4>
                    <ul className="space-y-2">
                        {lastAlerts.map(alert => (
                            <li key={alert.id} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {alert.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      )}

      {/* Offers Section */}
      <div id="offres" className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Nos Offres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 bg-white rounded-lg p-6 text-center shadow-md">
            <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">GRATUITE – BRVM Essentiel</h3>
            <p className="text-gray-600 text-sm">Résumé quotidien de la séance, hausses et baisses du jour, événements clés de la bourse.</p>
          </div>
          <div className="border-2 border-green-500 bg-white rounded-lg p-6 text-center shadow-xl relative">
             <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Populaire</span>
            </div>
            <BarChart className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">PREMIUM ANALYSE</h3>
            <p className="text-gray-600 text-sm">Analyses financières approfondies, lecture des résultats et des tendances, messages ciblés plusieurs fois par semaine.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-6 text-center shadow-md">
            <Star className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">PREMIUM CONSEIL</h3>
            <p className="text-gray-600 text-sm">Alertes stratégiques, recommandations argumentées, avec un horizon court, moyen et long terme.</p>
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4">1</div>
            <h3 className="font-bold text-lg mb-2">Inscription Rapide</h3>
            <p className="text-gray-600">Entrez votre numéro de téléphone.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4">2</div>
            <h3 className="font-bold text-lg mb-2">Choix du Canal</h3>
            <p className="text-gray-600">Choisissez WhatsApp ou SMS.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 bg-green-600 text-white rounded-full text-2xl font-bold mb-4">3</div>
            <h3 className="font-bold text-lg mb-2">Réception Automatique</h3>
            <p className="text-gray-600">Recevez les alertes de la BRVM.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
