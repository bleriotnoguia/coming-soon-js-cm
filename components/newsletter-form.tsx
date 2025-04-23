"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, MessageCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);

    // try {
    //   const response = await fetch('/api/newsletter', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.error);
    //   }

    //   setEmail("");
    //   toast({
    //     title: "Inscription réussie",
    //     description: "Merci pour votre inscription à notre newsletter!",
    //   });
    // } catch (error: any) {
    //   toast({
    //     title: "Erreur",
    //     description: error.message || "Une erreur est survenue. Veuillez réessayer plus tard.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setLoading(false);
    // }
    setIsModalOpen(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
      >
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="flex-1"
          // disabled={true}
          onClick={() => setIsModalOpen(true)}
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 text-black hover:bg-yellow-600"
        >
          {loading ? "En cours..." : "S'inscrire"}
        </Button>
      </form>

      <Button
        variant="outline"
        className="w-[300px] mt-5"
        onClick={() =>
          window.open("https://github.com/bleriotnoguia/javascript.cm")
        }
      >
        <Github className="mr-2 h-4 w-4" />
        Voir le projet sur GitHub
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fonctionnalité non disponible</DialogTitle>
            <DialogDescription>
              La newsletter n&apos;est pas encore disponible. En attendant, vous
              pouvez nous rejoindre sur WhatsApp ou suivre le projet sur GitHub.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                window.open("https://chat.whatsapp.com/F2wyTgSW68A1M30lJzH1lM")
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Rejoindre le groupe WhatsApp
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                window.open("https://github.com/bleriotnoguia/javascript.cm")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              Voir le projet sur GitHub
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
