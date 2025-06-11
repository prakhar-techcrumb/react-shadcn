import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GeneralForm } from "@/components/shared/general-form";
import { LivePreview } from "@/components/shared/live-preview";
import { Header } from "@/components/shared/Header";
import { Modal } from "@/components/shared/Modal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function InteractiveVideoCreate() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    // Function to handle step navigation
    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Creative Studio Form Component
    const CreativeStudioForm = () => (
        <form className="space-y-8">
            <div className="grid gap-2">
                <Label htmlFor="video-source">Video Source</Label>
                <Select defaultValue="upload">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="upload">Upload Video</SelectItem>
                        <SelectItem value="url">Video URL</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="vimeo">Vimeo</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="video-upload">Video File</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mb-2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span className="text-sm text-gray-500">Drag and drop your video file here or click to browse</span>
                        <span className="text-xs text-gray-400 mt-1">MP4, WebM or MOV up to 200MB</span>
                    </div>
                    <Input id="video-upload" type="file" className="hidden" />
                </div>
            </div>
        </form>
    );

    // Event Tracker Form Component
    const EventTrackerForm = () => (
        <form className="space-y-8">
            <div className="grid gap-2">
                <Label htmlFor="analytics-integration">Analytics Integration</Label>
                <Select defaultValue="google">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select analytics provider" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="google">Google Analytics</SelectItem>
                        <SelectItem value="adobe">Adobe Analytics</SelectItem>
                        <SelectItem value="custom">Custom Integration</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="tracking-id">Google Analytics Tracking ID</Label>
                <Input id="tracking-id" placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" />
            </div>

            <div className="grid gap-2">
                <Label>Events to Track</Label>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="event-play" defaultChecked />
                        <Label htmlFor="event-play">Play</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="event-pause" defaultChecked />
                        <Label htmlFor="event-pause">Pause</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="event-complete" defaultChecked />
                        <Label htmlFor="event-complete">Video Complete</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="event-milestone" />
                        <Label htmlFor="event-milestone">Progress Milestones</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="event-interaction" defaultChecked />
                        <Label htmlFor="event-interaction">Interactive Element Clicks</Label>
                    </div>
                </div>
            </div>
        </form>
    );

    return (
        <div className="flex-1">
            <Header
                title="Interactive Video"
                breadcrumbs={[
                    { name: "Interactive Video", href: "/interactiveVideo" },
                    { name: "Create", href: "/interactiveVideo" },
                ]}
            />

            {/* Step Indicator */}
            <div className="flex items-center justify-between relative">
                <div className="flex-1">
                    <Button
                        variant="ghost"
                        className={`w-full hover:bg-accent rounded-none h-auto py-4 relative text-base focus-visible:outline-none focus-visible:ring-0 ${currentStep === 1 ? "bg-accent border-b-2 border-gray-200 font-semibold" : ""
                            }`}
                        onClick={() => setCurrentStep(1)}
                    >
                        General
                    </Button>
                </div>

                <div className="flex-1">
                    <Button
                        variant="ghost"
                        className={`w-full hover:bg-accent rounded-none h-auto py-4 relative text-base focus-visible:outline-none focus-visible:ring-0 ${currentStep === 2 ? "bg-accent border-b-2 border-gray-200 font-semibold" : ""
                            }`}
                        onClick={() => setCurrentStep(2)}
                    >
                        Creative Studio
                    </Button>
                </div>

                <div className="flex-1">
                    <Button
                        variant="ghost"
                        className={`w-full hover:bg-accent rounded-none h-auto py-4 relative text-base focus-visible:outline-none focus-visible:ring-0 ${currentStep === 3 ? "bg-accent border-b-2 border-gray-200 font-semibold" : ""
                            }`}
                        onClick={() => setCurrentStep(3)}
                    >
                        Event Tracker
                    </Button>
                </div>
            </div>

            {/* Main Content: Form and Live Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Card className="p-6 border rounded-lg">
                    <CardHeader className="px-0 py-0 pb-4">
                        <CardTitle className="text-xl font-semibold">
                            {currentStep === 1 && "General Settings"}
                            {currentStep === 2 && "Creative Studio"}
                            {currentStep === 3 && "Event Tracker"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        {currentStep === 1 && <GeneralForm />}
                        {currentStep === 2 && <CreativeStudioForm />}
                        {currentStep === 3 && <EventTrackerForm />}
                    </CardContent>
                </Card>
                <Card className="p-6 border rounded-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 px-0 py-0 pb-4">
                        <CardTitle className="text-xl font-semibold">Live Preview</CardTitle>
                        <Modal
                            trigger={
                                <Button variant="link">
                                    Player Settings
                                </Button>
                            }
                            title="Player Settings"
                            description="Configure the interactive video player appearance and behavior"
                            content={
                                <div className="grid gap-8">
                                    <div className="grid gap-2">
                                        <Label htmlFor="autoplay">Autoplay</Label>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="autoplay" />
                                            <Label htmlFor="autoplay">Enable autoplay when possible</Label>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="controls">Player Controls</Label>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="controls" defaultChecked />
                                            <Label htmlFor="controls">Show player controls</Label>
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="playback-rate">Default Playback Rate</Label>
                                        <Select defaultValue="1">
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select playback rate" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Playback Speed</SelectLabel>
                                                    <SelectItem value="0.5">0.5x</SelectItem>
                                                    <SelectItem value="0.75">0.75x</SelectItem>
                                                    <SelectItem value="1">1x (Normal)</SelectItem>
                                                    <SelectItem value="1.25">1.25x</SelectItem>
                                                    <SelectItem value="1.5">1.5x</SelectItem>
                                                    <SelectItem value="2">2x</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="player-theme">Player Theme</Label>
                                        <Select defaultValue="default">
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Theme Options</SelectLabel>
                                                    <SelectItem value="default">Default</SelectItem>
                                                    <SelectItem value="dark">Dark</SelectItem>
                                                    <SelectItem value="light">Light</SelectItem>
                                                    <SelectItem value="minimal">Minimal</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            }
                        />
                    </CardHeader>
                    <CardContent className="p-0">
                        <LivePreview />
                    </CardContent>
                </Card>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between mt-8">
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                    >
                        Discard
                    </Button>
                </div>
                <Button
                    variant={"orange"}
                    onClick={handleNext}
                >
                    {currentStep === totalSteps ? "Save" : "Next"}
                </Button>
            </div>
        </div>
    );
}