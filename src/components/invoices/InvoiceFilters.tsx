import { Settings2, Filter, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
}

const InvoiceFilters = () => {
  const [columns, setColumns] = useState<ColumnConfig[]>([
    { id: "numero_facture", label: "N°Facture reçue", visible: true },
    { id: "numero_depense", label: "N°Dépense", visible: false },
    { id: "numero_dossier", label: "N°Dossier", visible: false },
    { id: "montant_ht", label: "Montant HT", visible: false },
    { id: "nom_fournisseur", label: "Nom fournisseur", visible: true },
    { id: "montant_tva", label: "Montant TVA", visible: false },
    { id: "montant_ttc", label: "Montant TTC", visible: true },
    { id: "phase", label: "Phase", visible: true },
  ]);

  const toggleColumn = (id: string) => {
    setColumns(
      columns.map((col) =>
        col.id === id ? { ...col, visible: !col.visible } : col
      )
    );
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Settings2 className="h-4 w-4" />
              Personnaliser l'affichage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Personnaliser l'affichage</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-3">
              {columns.map((column) => (
                <div
                  key={column.id}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={column.visible}
                      onCheckedChange={() => toggleColumn(column.id)}
                    />
                    <span className="text-sm font-medium">{column.label}</span>
                  </div>
                  {!column.visible && (
                    <span className="text-xs text-muted-foreground">Masquer</span>
                  )}
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button className="bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark">
                Valider
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Sauvegarder Filtre
        </Button>
        <Button className="gap-2 bg-brand-gold text-primary-foreground hover:bg-brand-gold-dark">
          <Plus className="h-4 w-4" />
          Ajouter une facture
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InvoiceFilters;
