import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md mx-auto login-card">
        <CardHeader className="space-y-6">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Portal do Assinante</h1>
            <p className="text-sm text-muted-foreground">
              Por favor, informe seu CPF ou CNPJ e senha para continuar.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Digite seu CNPJ ou CPF"
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">
              Neutral helper text
            </div>
          </div>
          <div className="space-y-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
              Entrar
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full hover:bg-transparent hover:underline"
            >
              Primeiro acesso
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;