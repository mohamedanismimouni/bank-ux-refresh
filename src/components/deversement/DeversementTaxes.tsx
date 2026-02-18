import { Receipt } from "lucide-react";
import { DataCard } from "@/components/ui/data-card";

const DeversementTaxes = () => {
  return (
    <DataCard className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
          <Receipt className="h-5 w-5 text-brand-navy" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Liste des taxes</h2>
          <p className="text-sm text-muted-foreground">Récapitulatif des taxes applicables</p>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="data-table-header">
              <th className="text-left p-3">Type de Taxe</th>
              <th className="text-right p-3">Taux</th>
              <th className="text-right p-3">Base HT</th>
              <th className="text-right p-3">Montant Taxe</th>
              <th className="text-right p-3">Montant TTC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                  TVARM
                </span>
              </td>
              <td className="p-3 text-right">10%</td>
              <td className="p-3 text-right">100,00</td>
              <td className="p-3 text-right">10,00</td>
              <td className="p-3 text-right font-bold text-brand-navy">110,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-border bg-secondary/50">
              <td className="p-3 font-semibold" colSpan={2}>Total</td>
              <td className="p-3 text-right font-bold">100,00</td>
              <td className="p-3 text-right font-bold">10,00</td>
              <td className="p-3 text-right font-bold text-brand-navy">110,00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </DataCard>
  );
};

export default DeversementTaxes;
