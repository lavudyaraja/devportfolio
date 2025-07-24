import  Header  from "@/components/layout/FuturisticNavbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useState } from "react";
import { 
  AlertCircle, 
  Check, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  Github, 
  Globe, 
  Info, 
  Laptop, 
  Linkedin, 
  Mail, 
  Moon, 
  MoreHorizontal, 
  Palette, 
  Search, 
  Share2, 
  Sun, 
  Twitter, 
  ArrowUpCircle
} from "lucide-react";

export default function ComponentsPage() {
  const [progress, setProgress] = useState(60);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <SectionHeading 
              title="UI Component Library" 
              subtitle="A showcase of reusable UI components used throughout the portfolio"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Various button styles and variations used in the application.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button className="gap-2">
                      <Download className="h-4 w-4" /> Download
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" /> Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Typography */}
              <Card>
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>Text elements and styles used throughout the application.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                  <h4 className="text-xl font-bold">Heading 4</h4>
                  <h5 className="text-lg font-bold">Heading 5</h5>
                  <p className="text-base">Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className="text-sm text-muted-foreground">Small muted text. Usually used for descriptions.</p>
                  <p className="italic">Italic text for emphasis.</p>
                  <p className="font-semibold">Semi-bold text for highlighting important information.</p>
                  <p className="underline">Underlined text.</p>
                </CardContent>
              </Card>
              
              {/* Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                  <CardDescription>Container components for content and actions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description text goes here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Main content of the card.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost">Cancel</Button>
                      <Button>Submit</Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
              
              {/* Form Inputs */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Inputs</CardTitle>
                  <CardDescription>Various form elements for user input.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Select Option</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <Label htmlFor="option1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <Label htmlFor="option2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              
              {/* Accordions & Tabs */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordions & Tabs</CardTitle>
                  <CardDescription>Collapsible content and tabbed interfaces.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is this an accordion?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It allows users to expand and collapse content sections.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How does it work?</AccordionTrigger>
                      <AccordionContent>
                        The accordion component helps manage vertical space when displaying multiple sections of content.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Tabs defaultValue="tab1">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
                      Tab 1 content goes here.
                    </TabsContent>
                    <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
                      Tab 2 content goes here.
                    </TabsContent>
                    <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
                      Tab 3 content goes here.
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              {/* Badges & Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges & Tags</CardTitle>
                  <CardDescription>Small status indicators and labels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge className="bg-blue-500">Custom</Badge>
                    <Badge className="bg-green-500">Success</Badge>
                    <Badge className="bg-yellow-500">Warning</Badge>
                    <Badge className="bg-gray-500">Neutral</Badge>
                  </div>
                </CardContent>
              </Card>
              
              {/* Avatars */}
              <Card>
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                  <CardDescription>User profile images and fallbacks.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Avatar>
                    <AvatarImage src="/images/Avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/images/Avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-14 w-14">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
              
              {/* Alerts & Toasts */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Toasts</CardTitle>
                  <CardDescription>Notifications and status messages.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      This is an error alert message.
                    </AlertDescription>
                  </Alert>
                  <div className="p-4 border rounded-md">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="font-medium">Toast notification example</span>
                      </div>
                      <button className="ml-auto">✕</button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Progress & Loading */}
              <Card>
                <CardHeader>
                  <CardTitle>Progress & Sliders</CardTitle>
                  <CardDescription>Visual indicators of progress and selectable ranges.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Progress bar: {progress}%</Label>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Slider</Label>
                    <Slider
                      defaultValue={[progress]}
                      max={100}
                      step={1}
                      onValueChange={(value) => setProgress(value[0])}
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Tooltips & Dropdowns */}
              <Card>
                <CardHeader>
                  <CardTitle>Tooltips & Dropdowns</CardTitle>
                  <CardDescription>Informational hover elements and dropdown menus.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
              
              {/* Toggle & Switch */}
              <Card>
                <CardHeader>
                  <CardTitle>Toggles & Switches</CardTitle>
                  <CardDescription>Binary controls for enabling/disabling features.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Theme Toggle</Label>
                    <div className="flex space-x-2">
                      <ModeToggle />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Separators */}
              <Card>
                <CardHeader>
                  <CardTitle>Separators & Dividers</CardTitle>
                  <CardDescription>Visual separators between content sections.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="pb-2">Section one content</p>
                    <Separator />
                    <p className="pt-2">Section two content</p>
                  </div>
                  
                  <div className="flex items-center">
                    <span>Left</span>
                    <Separator className="mx-2" orientation="vertical" />
                    <span>Right</span>
                  </div>
                  
                  <div>
                    <div className="relative">
                      <Separator className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </Separator>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media Icons */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Icons</CardTitle>
                  <CardDescription>Icons for social media platforms and actions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Globe className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Theme Related */}
              <Card>
                <CardHeader>
                  <CardTitle>Theme Components</CardTitle>
                  <CardDescription>Components related to theming and appearance.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline">
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Moon className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Laptop className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Palette className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                  </div>
                  
                  <div>
                    <Label>Dark/Light Mode Toggle</Label>
                    <div className="mt-2">
                      <ModeToggle />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code Block */}
              <Card>
                <CardHeader>
                  <CardTitle>Code Block</CardTitle>
                  <CardDescription>Syntax-highlighted code snippets.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative rounded-md bg-muted p-4 font-mono text-sm">
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code className="language-javascript">
{`// Example React component
function Welcome() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        Hello, world!
      </h1>
      <p>Welcome to my portfolio.</p>
    </div>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
              
              {/* Back to Top Button */}
              <Card>
                <CardHeader>
                  <CardTitle>Navigation Buttons</CardTitle>
                  <CardDescription>Buttons for navigational purposes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button className="rounded-full" size="icon" variant="outline">
                      <ArrowUpCircle className="h-5 w-5" />
                    </Button>
                    <span>Back to Top Button</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="gap-2">
                      <span>View more</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      <span>Download Resume</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Search Component */}
              <Card>
                <CardHeader>
                  <CardTitle>Search Components</CardTitle>
                  <CardDescription>Search and filter functionality.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="secondary" size="sm">Projects</Button>
                    <Button variant="outline" size="sm">Blog Posts</Button>
                    <Button variant="outline" size="sm">Case Studies</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}