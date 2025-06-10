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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-muted-foreground">Add your first feature here</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-muted-foreground">Add your second feature here</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-muted-foreground">Add your third feature here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;