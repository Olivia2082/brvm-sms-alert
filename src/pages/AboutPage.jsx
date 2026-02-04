import { HelpCircle, CheckCircle, BarChartHorizontal } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-green-600" />
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900">À Propos de SokoAlerts</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Notre mission est de rendre l'information boursière de la BRVM accessible à tous, instantanément.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <BarChartHorizontal className="h-8 w-8 text-green-600" />
                Comment ça marche ?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                C'est très simple ! Vous vous abonnez avec votre numéro de téléphone. Nos systèmes surveillent en permanence l'activité de la Bourse Régionale des Valeurs Mobilières. Dès qu'une information importante est publiée (hausse, baisse, nouvelle cotation, etc.), nous vous envoyons une alerte SMS concise et claire.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                Nos Avantages
              </h2>
              <ul className="mt-4 space-y-3 text-lg text-gray-600 list-inside">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span><b>Instantanéité :</b> Recevez les nouvelles dès leur publication.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span><b>Accessibilité :</b> Pas besoin de smartphone ou d'internet. Un simple téléphone suffit.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span><b>Simplicité :</b> Des messages clairs et directs pour une information rapide.</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span><b>Fiabilité :</b> Des informations sourcées directement auprès de la BRVM.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
             <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" alt="Graphique boursier" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;