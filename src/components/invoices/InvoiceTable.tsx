import { Eye, MoreHorizontal, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Invoice {
  id: string;
  numeroFacture: string;
  numeroDepense: string;
  numeroDossier: string;
  nomFournisseur: string;
  montantHT: number;
  montantTVA: number;
  montantTTC: number;
  phase: "traite" | "a_traiter" | "renvoye";
}

const invoices: Invoice[] = [
  {
    id: "1",
    numeroFacture: "F20251980991",
    numeroDepense: "(Aucun)",
    numeroDossier: "(Aucun)",
    nomFournisseur: "DOCAPOSTE",
    montantHT: 100.0,
    montantTVA: 5.5,
    montantTTC: 105.5,
    phase: "traite",
  },
  {
    id: "2",
    numeroFacture: "F20251990995",
    numeroDepense: "(Aucun)",
    numeroDossier: "(Aucun)",
    nomFournisseur: "O.S.M",
    montantHT: 100.0,
    montantTVA: 10.0,
    montantTTC: 110.0,
    phase: "a_traiter",
  },
  {
    id: "3",
    numeroFacture: "F20251213091",
    numeroDepense: "(Aucun)",
    numeroDossier: "(Aucun)",
    nomFournisseur: "SDCV",
    montantHT: 100.0,
    montantTVA: 20.0,
    montantTTC: 120.0,
    phase: "a_traiter",
  },
  {
    id: "4",
    numeroFacture: "F20251980992",
    numeroDepense: "(Aucun)",
    numeroDossier: "(Aucun)",
    nomFournisseur: "DOCAPOSTE",
    montantHT: 100.0,
    montantTVA: 5.5,
    montantTTC: 105.5,
    phase: "a_traiter",
  },
];

const getPhaseInfo = (phase: Invoice["phase"]) => {
  switch (phase) {
    case "traite":
      return { label: "Traité", variant: "success" as const };
    case "a_traiter":
      return { label: "À traiter", variant: "pending" as const };
    case "renvoye":
      return { label: "Renvoyé", variant: "error" as const };
    default:
      return { label: phase, variant: "default" as const };
  }
};

const InvoiceTable = () => {
  return (
    <div className="bg-card rounded-lg border border-border/60 shadow-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-accent hover:bg-accent">
            <TableHead className="w-12 text-accent-foreground">
              <Checkbox />
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider">
              N°Facture reçue
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider">
              N°Dépense
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider">
              N°Dossier
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider">
              Nom fournisseur
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider text-right">
              Montant HT
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider text-right">
              Montant TVA
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider text-right">
              Montant TTC
            </TableHead>
            <TableHead className="text-accent-foreground font-semibold text-xs uppercase tracking-wider">
              Phase
            </TableHead>
            <TableHead className="w-12" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => {
            const phaseInfo = getPhaseInfo(invoice.phase);
            return (
              <TableRow
                key={invoice.id}
                className="hover:bg-secondary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Link
                    to={`/factures/${invoice.id}`}
                    className="flex items-center gap-2 text-info hover:text-info/80 font-medium transition-colors group"
                  >
                    {invoice.numeroFacture}
                    <Eye className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {invoice.numeroDepense}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {invoice.numeroDossier}
                </TableCell>
                <TableCell className="font-medium">{invoice.nomFournisseur}</TableCell>
                <TableCell className="text-right font-mono">
                  {invoice.montantHT.toFixed(1)}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {invoice.montantTVA.toFixed(1)}
                </TableCell>
                <TableCell className="text-right font-mono font-medium">
                  {invoice.montantTTC.toFixed(1)}
                </TableCell>
                <TableCell>
                  <StatusBadge variant={phaseInfo.variant}>
                    {phaseInfo.label}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        Voir détails
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ouvrir dans GED
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="px-4 py-3 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Items par page:</span>
          <select className="bg-secondary border border-border rounded px-2 py-1 text-foreground">
            <option>4</option>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span>1 – 4 of 47</span>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled>
              ‹
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              ›
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
