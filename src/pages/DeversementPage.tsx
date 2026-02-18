import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DataCard, DataCardHeader, DataFieldInput } from "@/components/ui/data-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const DeversementPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleValidate = () => {
    toast({ title: "Déversement validé", description: "Le déversement en dépense a été enregistré avec succès." });
    navigate("/factures/1");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <Breadcrumb
          items={[
            { label: "Informations factures", href: "/" },
            { label: "Détail de la facture", href: "/factures/1" },
            { label: "Déversement en dépense" },
          ]}
        />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/factures/1">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Déversement en dépense</h1>
              <p className="text-muted-foreground mt-0.5">Formulaire de déversement dans le SIG</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/factures/1">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour vers le détail
              </Button>
            </Link>
            <Button onClick={handleValidate} className="gap-2 bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark">
              <CheckCircle className="h-4 w-4" />
              Valider le déversement
            </Button>
          </div>
        </div>

        {/* Identification Banner */}
        <div className="bg-brand-navy text-white rounded-lg px-5 py-3 mb-6 font-semibold">
          Identification Facture : O.S.M - F2025198712
        </div>

        {/* Invoice Info Form */}
        <DataCard className="mb-6">
          <DataCardHeader title="Informations de la facture" subtitle="Détails pour le déversement" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            <DataFieldInput label="Activité" value="(Aucun)" />
            <DataFieldInput label="Service destinataire" value="(Aucun)" />
            <div className="space-y-1.5">
              <label className="form-label">Type Facture</label>
              <Select defaultValue="situation">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="situation">Situation sur marché</SelectItem>
                  <SelectItem value="avoir">Avoir</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DataFieldInput label="Code produit" value="(Aucun)" />
            <DataFieldInput label="N°Dossier/Avenant" value="(Aucun)" />
            <div className="space-y-1.5">
              <label className="form-label">Phase/Jalon</label>
              <div className="flex items-center gap-2 h-10">
                <StatusBadge variant="pending">À traiter</StatusBadge>
                <StatusBadge variant="success">Nouveau</StatusBadge>
              </div>
            </div>

            <DataFieldInput label="Nom Fournisseur CFE" value="O.S.M" />
            <DataFieldInput label="Siret/Siren" value="81922564000013" />
            <div className="space-y-1.5">
              <label className="form-label">Code Fournisseur/Libelle/Role</label>
              <Select defaultValue="osm">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="osm">05732720/O.S.M/O.S.M/FOURN</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DataFieldInput label="Référence Dépense de l'émetteur" value="F2025198712" />
            <div className="space-y-1.5">
              <label className="form-label">Date de réception</label>
              <Input type="date" defaultValue="2026-02-18" />
            </div>
            <div className="space-y-1.5">
              <label className="form-label">Date d'émission</label>
              <Input type="date" defaultValue="2025-12-01" />
            </div>

            <div className="space-y-1.5">
              <label className="form-label">Type payment</label>
              <Select defaultValue="sepa">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="sepa">Virement SEPA</SelectItem>
                  <SelectItem value="cheque">Chèque</SelectItem>
                  <SelectItem value="prelevement">Prélèvement</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DataCard>

        {/* Décomposition */}
        <DataCard className="mb-6">
          <DataCardHeader title="Décomposition" subtitle="Ventilation des montants HT" />
          <div className="space-y-4">
            {/* Total row */}
            <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
              <span className="text-sm font-medium text-muted-foreground min-w-[140px]">Base Total HT</span>
              <span className="text-lg font-bold text-foreground ml-auto">100.0</span>
            </div>
            {/* Header */}
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-medium">Rubrique immobilisation</th>
                    <th className="text-left p-3 font-medium">Imputation Analytique</th>
                    <th className="text-right p-3 font-medium">Base HT</th>
                    <th className="text-left p-3 font-medium">Type de Taxe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3">—</td>
                    <td className="p-3">Honoraires CTX</td>
                    <td className="p-3 text-right font-semibold">100</td>
                    <td className="p-3">TVARM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </DataCard>

        {/* Liste des taxes */}
        <DataCard className="mb-6">
          <DataCardHeader title="Liste des taxes" subtitle="Récapitulatif des taxes applicables" />
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
              <span className="text-sm font-medium text-muted-foreground min-w-[140px]">Base Total</span>
              <div className="ml-auto flex items-center gap-8">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Base HT</p>
                  <p className="font-bold">100.0</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Taxe</p>
                  <p className="font-bold">10.0</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">TTC</p>
                  <p className="font-bold text-brand-navy">110.0</p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-medium">Type de Taxe</th>
                    <th className="text-right p-3 font-medium">Taux de Taxe</th>
                    <th className="text-right p-3 font-medium">Base HT</th>
                    <th className="text-right p-3 font-medium">Montant Taxe</th>
                    <th className="text-right p-3 font-medium">Montant TTC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3 font-medium">TVARM</td>
                    <td className="p-3 text-right">10</td>
                    <td className="p-3 text-right">100</td>
                    <td className="p-3 text-right">10</td>
                    <td className="p-3 text-right font-semibold">110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </DataCard>
      </main>
    </div>
  );
};

export default DeversementPage;
