import { DollarSign, Receipt, Calculator, TrendingUp } from "lucide-react";

const DeversementAmounts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="text-center p-4 bg-card rounded-lg border border-border/60 shadow-sm">
        <div className="h-9 w-9 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Base HT</p>
        <p className="text-xl font-bold text-foreground">100,00</p>
      </div>
      <div className="text-center p-4 bg-card rounded-lg border border-border/60 shadow-sm">
        <div className="h-9 w-9 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
          <Calculator className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Taux TVA</p>
        <p className="text-xl font-bold text-foreground">10%</p>
      </div>
      <div className="text-center p-4 bg-card rounded-lg border border-border/60 shadow-sm">
        <div className="h-9 w-9 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
          <Receipt className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Montant Taxe</p>
        <p className="text-xl font-bold text-foreground">10,00</p>
      </div>
      <div className="text-center p-4 bg-brand-gold/10 rounded-lg border border-brand-gold/20 shadow-sm">
        <div className="h-9 w-9 bg-brand-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
          <TrendingUp className="h-4 w-4 text-brand-navy" />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Montant TTC</p>
        <p className="text-xl font-bold text-brand-navy">110,00</p>
      </div>
    </div>
  );
};

export default DeversementAmounts;
