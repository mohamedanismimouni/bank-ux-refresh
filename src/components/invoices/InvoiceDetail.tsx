import { 
  FileText, 
  ExternalLink, 
  Edit2, 
  UserPlus, 
  Paperclip, 
  RotateCcw, 
  XCircle,
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataCard, DataCardHeader, DataFieldInput } from "@/components/ui/data-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const InvoiceDetail = () => {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Consulter la GED
        </Button>
        <Button className="gap-2 bg-success text-success-foreground hover:bg-success/90">
          <ExternalLink className="h-4 w-4" />
          Afficher dans Le SIG
        </Button>
        <Link to="/factures/1/deversement">
          <Button className="gap-2 bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark">
            <ExternalLink className="h-4 w-4" />
            Déverser dans Le SIG
          </Button>
        </Link>
      </div>

      {/* Invoice Info Card */}
      <DataCard>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-brand-navy" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Facture: WAGA ENERGY - F20261901000008</h2>
              <p className="text-sm text-muted-foreground">Détails complets de la facture</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2">
            <Edit2 className="h-4 w-4" />
            Modifier les informations
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          <DataFieldInput label="Activité" value="PRET" />
          <DataFieldInput label="Service destinataire" value="2K1" />
          <DataFieldInput label="Gestionnaire" value="Renault Claire" />
          
          <DataFieldInput label="Code produit" value="EXPORT" />
          <DataFieldInput label="N°Dossier/Avenant" value="DOS02045761/01" />
          <DataFieldInput label="N°Chantier/Avenant" value="(Aucun)" />
          
          <DataFieldInput label="N°de dépense/Situation" value="(Aucun)" />
          <div className="space-y-1.5">
            <label className="form-label">Phase/Jalon</label>
            <div className="flex items-center gap-2 h-10">
              <StatusBadge variant="pending">À traiter</StatusBadge>
              <StatusBadge variant="warning">À valider</StatusBadge>
            </div>
          </div>
          <DataFieldInput label="Nom du marché" value="(Aucun)" />
        </div>
      </DataCard>

      {/* Financial Details Card */}
      <DataCard>
        <DataCardHeader title="Informations financières" subtitle="Montants et dates de la facture" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Montant HT</p>
            <p className="text-xl font-bold text-foreground">3 000,0</p>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Montant TVA</p>
            <p className="text-xl font-bold text-foreground">600,0</p>
          </div>
          <div className="text-center p-4 bg-brand-gold/10 rounded-lg border border-brand-gold/20">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Montant TTC</p>
            <p className="text-xl font-bold text-brand-navy">3 600,0</p>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Date réception</p>
            <p className="text-sm font-semibold text-foreground">26/01/2026</p>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Date facture</p>
            <p className="text-sm font-semibold text-foreground">16/01/2026</p>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-lg">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Date exigibilité</p>
            <p className="text-sm font-semibold text-foreground">26/01/2026</p>
          </div>
        </div>
      </DataCard>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-4">
        <Button variant="outline" className="gap-2">
          <UserPlus className="h-4 w-4" />
          Ajouter un signataire
        </Button>
        <Button variant="outline" className="gap-2">
          <Paperclip className="h-4 w-4" />
          Ajouter une piece jointe
        </Button>
        <Button variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Facture prise à tort
        </Button>
        <Button variant="destructive" className="gap-2">
          <XCircle className="h-4 w-4" />
          Refuser la facture
        </Button>
      </div>

      {/* Collapsible Sections */}
      <Collapsible open={commentsOpen} onOpenChange={setCommentsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark rounded-lg px-4 py-3 h-auto"
          >
            <span className="font-semibold">Commentaires</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${commentsOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <DataCard className="space-y-4">
            <div className="flex items-center justify-end gap-2 mb-4">
              <Button variant="outline" size="sm">Annuler les modifications</Button>
              <Button size="sm" className="bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark gap-2">
                Enregistrer
              </Button>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-medium">Date</th>
                    <th className="text-left p-3 font-medium">Gestionnaire</th>
                    <th className="text-left p-3 font-medium">Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3">16/01/2026 16:45:48</td>
                    <td className="p-3">BATCH Batch</td>
                    <td className="p-3">Note sur la facture</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="form-label">Nouveau commentaire</label>
                <textarea 
                  className="w-full h-24 px-3 py-2 text-sm border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  placeholder="Ajouter un commentaire..."
                />
                <p className="text-xs text-muted-foreground mt-1">0 sur 200 caractères</p>
              </div>
            </div>
          </DataCard>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={historyOpen} onOpenChange={setHistoryOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark rounded-lg px-4 py-3 h-auto"
          >
            <span className="font-semibold">Historique</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${historyOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <DataCard>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 font-medium">Id</th>
                    <th className="text-left p-3 font-medium">Événement</th>
                    <th className="text-left p-3 font-medium">Message</th>
                    <th className="text-left p-3 font-medium">Date traitement</th>
                    <th className="text-left p-3 font-medium">Code retour</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-mono">2890</td>
                    <td className="p-3">Evenement reçu par CFE</td>
                    <td className="p-3 text-muted-foreground">(Aucun)</td>
                    <td className="p-3">—</td>
                    <td className="p-3 font-mono text-muted-foreground">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">2892</td>
                    <td className="p-3">LIEGED</td>
                    <td className="p-3">AUCUNE liaison GED</td>
                    <td className="p-3">16/01/2026 15:46:01</td>
                    <td className="p-3 font-mono text-muted-foreground">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">2893</td>
                    <td className="p-3">Mise à jour Jalon</td>
                    <td className="p-3 text-muted-foreground">(Aucun)</td>
                    <td className="p-3">16/01/2026 15:46:02</td>
                    <td className="p-3 font-mono text-muted-foreground">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">2891</td>
                    <td className="p-3">Orientation Automatique</td>
                    <td className="p-3 text-muted-foreground">(Aucun)</td>
                    <td className="p-3">16/01/2026 15:46:02</td>
                    <td className="p-3 font-mono text-muted-foreground">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DataCard>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default InvoiceDetail;
