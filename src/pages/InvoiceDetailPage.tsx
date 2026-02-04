import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InvoiceDetail from "@/components/invoices/InvoiceDetail";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InvoiceDetailPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-6">
        <Breadcrumb 
          items={[
            { label: "Informations factures", href: "/" },
            { label: "Détail de la facture" }
          ]} 
        />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="icon" className="h-10 w-10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Détail de la facture</h1>
              <p className="text-muted-foreground mt-0.5">
                Consultez et modifiez les informations de la facture
              </p>
            </div>
          </div>
        </div>

        <InvoiceDetail />
      </main>
    </div>
  );
};

export default InvoiceDetailPage;
