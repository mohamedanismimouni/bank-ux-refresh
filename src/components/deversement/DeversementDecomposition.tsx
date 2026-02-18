import { Layers } from "lucide-react";
import { DataCard } from "@/components/ui/data-card";

const DeversementDecomposition = () => {
  return (
    <DataCard className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
          <Layers className="h-5 w-5 text-brand-navy" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Décomposition</h2>
          <p className="text-sm text-muted-foreground">Ventilation des montants HT</p>
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="data-table-header">
              <th className="text-left p-3">Rubrique immobilisation</th>
              <th className="text-left p-3">Imputation Analytique</th>
              <th className="text-right p-3">Base HT</th>
              <th className="text-left p-3">Type de Taxe</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border hover:bg-muted/30 transition-colors">
              <td className="p-3 text-muted-foreground">—</td>
              <td className="p-3">Honoraires CTX</td>
              <td className="p-3 text-right font-semibold">100,00</td>
              <td className="p-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                  TVARM
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-border bg-secondary/50">
              <td className="p-3 font-semibold" colSpan={2}>Total</td>
              <td className="p-3 text-right font-bold text-foreground">100,00</td>
              <td className="p-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </DataCard>
  );
};

export default DeversementDecomposition;
