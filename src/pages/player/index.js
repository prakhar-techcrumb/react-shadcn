import React from 'react';

const PlayerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Welcome to Player Page
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is your main player page. Start building your application here!
        </p>
      </div>
    </div>
  );
};

export default PlayerPage;