import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Bot, ShieldAlert } from "lucide-react";

const FraudDetectionAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Fraud Detection Assistant
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fraud Detection Form */}
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
              <ShieldAlert className="text-red-500" />
              Check for Fraud
            </h2>
            <Input placeholder="Enter transaction ID or details" />
            <Textarea placeholder="Describe the suspicious activity..." />
            <Button className="w-full bg-red-500 hover:bg-red-600">Analyze</Button>
          </CardContent>
        </Card>

        {/* Chatbot */}
        <Card className="shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
              <Bot className="text-blue-500" />
              Fraud Detection Chatbot
            </h2>
            <div className="h-64 bg-white border rounded-lg p-4 overflow-y-auto text-sm text-gray-600">
              <p><strong>Bot:</strong> Hi there! Describe your concern or share transaction details.</p>
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FraudDetectionAssistant;
