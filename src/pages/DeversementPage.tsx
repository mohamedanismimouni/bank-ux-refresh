import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { ArrowLeft, CheckCircle, FileText, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DataCard, DataCardHeader, DataFieldInput } from "@/components/ui/data-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { StatusBadge } from "@/components/ui/status-badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import DeversementAmounts from "@/components/deversement/DeversementAmounts";
import DeversementDecomposition from "@/components/deversement/DeversementDecomposition";
import DeversementTaxes from "@/components/deversement/DeversementTaxes";

const DeversementPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [infoOpen, setInfoOpen] = useState(true);

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
                Retour
              </Button>
            </Link>
            <Button onClick={handleValidate} className="gap-2 bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark">
              <CheckCircle className="h-4 w-4" />
              Valider le déversement
            </Button>
          </div>
        </div>

        {/* Identification Banner */}
        <div className="bg-brand-navy text-white rounded-lg px-5 py-3 mb-6 flex items-center gap-3">
          <div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center">
            <FileText className="h-4 w-4" />
          </div>
          <span className="font-semibold">Identification Facture : O.S.M - F2025198712</span>
        </div>

        {/* Collapsible Invoice Info */}
        <Collapsible open={infoOpen} onOpenChange={setInfoOpen} className="mb-6">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark rounded-lg px-4 py-3 h-auto"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5" />
                <span className="font-semibold">Informations de la facture</span>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${infoOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <DataCard>
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
          </CollapsibleContent>
        </Collapsible>

        {/* Amount Summary Cards */}
        <DeversementAmounts />

        {/* Décomposition */}
        <DeversementDecomposition />

        {/* Liste des taxes */}
        <DeversementTaxes />
      </main>
    </div>
  );
};

export default DeversementPage;
