import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InvoiceFilters from "@/components/invoices/InvoiceFilters";
import InvoiceTable from "@/components/invoices/InvoiceTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6 animate-fade-in">
        <Breadcrumb items={[{ label: "Informations factures" }]} />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Informations factures</h1>
          <p className="text-muted-foreground mt-1">
            Gérez et suivez l'ensemble de vos factures entrantes
          </p>
        </div>

        <InvoiceFilters />
        <InvoiceTable />
      </main>
    </div>
  );
};

export default Index;
