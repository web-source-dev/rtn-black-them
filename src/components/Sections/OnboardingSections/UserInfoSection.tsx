'use client';

import React, { useState } from 'react';
import Divider from '@/components/ui/Divider';
import GlitchText from '@/components/ui/GlitchText';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import Badge from '@/components/ui/Badge';
import Dropdown from '@/components/ui/Dropdown';
import DatePicker from '@/components/ui/DatePicker';

// Define form state interface
interface FormState {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    location: string;
    address: string;
    socialMedia: string;
  };
  education: {
    highestLevel: string;
    fieldOfStudy: string;
    institution: string;
    currentlyEnrolled: boolean;
    graduationYear: string;
  };
  interests: {
    whyInterested: string;
    careerGoals: string;
    preferredAreas: string;
    techExperience: string;
    projectIdeas: string;
    learningStyle: string;
  };
  availability: {
    startDate: string;
    preferredSchedule: string;
    commitmentLevel: string;
  };
}

// Define dropdown options
const educationLevelOptions = [
  { value: "", label: "Select your highest education" },
  { value: "High School (In Progress)", label: "High School (In Progress)" },
  { value: "High School", label: "High School" },
  { value: "Associate's Degree", label: "Associate's Degree" },
  { value: "Bachelor's Degree", label: "Bachelor's Degree" },
  { value: "Master's Degree", label: "Master's Degree" },
  { value: "PhD or Doctorate", label: "PhD or Doctorate" },
  { value: "Trade School", label: "Trade School" },
  { value: "Other", label: "Other" },
];

const preferredAreasOptions = [
  { value: "", label: "Select your primary interest" },
  { value: "Frontend (UI/UX, design)", label: "Frontend (UI/UX, design)" },
  { value: "Backend (server-side logic)", label: "Backend (server-side logic)" },
  { value: "Full Stack (both frontend and backend)", label: "Full Stack (both frontend and backend)" },
  { value: "Not sure yet", label: "Not sure yet" },
];

const learningStyleOptions = [
  { value: "", label: "Select your learning style" },
  { value: "Visual learner (diagrams, videos, visuals)", label: "Visual learner (diagrams, videos, visuals)" },
  { value: "Auditory learner (discussions, explanations)", label: "Auditory learner (discussions, explanations)" },
  { value: "Reading/writing preference", label: "Reading/writing preference" },
  { value: "Hands-on, practical learner", label: "Hands-on, practical learner" },
  { value: "Combination of styles", label: "Combination of styles" },
];

const commitmentLevelOptions = [
  { value: "", label: "Select how much time you can commit weekly" },
  { value: "5-10 hours", label: "5-10 hours per week" },
  { value: "10-15 hours", label: "10-15 hours per week" },
  { value: "15-20 hours", label: "15-20 hours per week" },
  { value: "20+ hours", label: "20+ hours per week" },
];

export default function UserInfoSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Initialize form state
  const [formState, setFormState] = useState<FormState>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      age: '',
      location: '',
      address: '',
      socialMedia: '',
    },
    education: {
      highestLevel: '',
      fieldOfStudy: '',
      institution: '',
      currentlyEnrolled: false,
      graduationYear: '',
    },
    interests: {
      whyInterested: '',
      careerGoals: '',
      preferredAreas: '',
      techExperience: '',
      projectIdeas: '',
      learningStyle: '',
    },
    availability: {
      startDate: '',
      preferredSchedule: '',
      commitmentLevel: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (section: keyof FormState, field: string, value: string | boolean) => {
    if (section === 'education' && field === 'currentlyEnrolled') {
      setFormState({
        ...formState,
        education: {
          ...formState.education,
          currentlyEnrolled: value as boolean,
        },
      });
    } else {
      setFormState({
        ...formState,
        [section]: {
          ...formState[section as keyof Omit<FormState, 'termsAccepted' | 'aboutYourself'>],
          [field]: value,
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset submission states
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Send data to the onboarding API endpoint
      const response = await fetch('http://localhost:5000/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      // Handle response
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit application');
      }
      
      const data = await response.json();
      console.log('Application submitted successfully:', data);
      
      // Show success message
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError(typeof error === 'object' && error !== null && 'message' in error 
        ? (error as Error).message 
        : 'Failed to submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background/95 via-background to-background/95 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[60%] bg-secondary/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Free Coding Classes</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                We&apos;d Love to 
                <span className="relative text-white mx-2">
                  <GlitchText text="Know" />
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span> 
                You Better
              </h1>
              <p className="text-foreground/80 text-lg max-w-3xl mx-auto">
                Apply for our <span className="text-primary font-medium">FREE Full Stack Web Development</span> classes! No prior coding experience required - just bring your enthusiasm and dedication.
              </p>
              <p className="text-foreground/80 text-lg mt-4 max-w-3xl mx-auto">
                Before we schedule the final call to chat and introduce ourselves, this helps us understand your interests and how we can best support your learning journey.
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[...Array(totalSteps)].map((_, index) => (
                <div 
                  key={index} 
                  className={`text-sm font-medium ${currentStep >= index + 1 ? 'text-primary' : 'text-foreground/50'}`}
                >
                  Step {index + 1}
                </div>
              ))}
            </div>
            <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <TransitionWrapper>
            <div className="dark-card rounded-2xl p-8 md:p-10 shadow-2xl border border-foreground/10">
              <form className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gradient mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name*</label>
                        <input 
                          type="text" 
                          id="fullName" 
                          required
                          value={formState.personalInfo.fullName}
                          onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium mb-2">Age*</label>
                        <input 
                          type="number" 
                          id="age"
                          min="16"
                          max="99"
                          required
                          value={formState.personalInfo.age}
                          onChange={(e) => handleChange('personalInfo', 'age', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="Your age"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address*</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formState.personalInfo.email}
                          onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number*</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required
                          value={formState.personalInfo.phone}
                          onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">Current Location*</label>
                      <input 
                        type="text" 
                        id="location" 
                        required
                        value={formState.personalInfo.location}
                        onChange={(e) => handleChange('personalInfo', 'location', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="City, State/Province, Country"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">Full Address*</label>
                      <textarea 
                        id="address" 
                        rows={2}
                        required
                        value={formState.personalInfo.address}
                        onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Your complete residential address"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">Social Media (Optional)</label>
                      <input 
                        type="text" 
                        id="socialMedia"
                        value={formState.personalInfo.socialMedia}
                        onChange={(e) => handleChange('personalInfo', 'socialMedia', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Instagram, Twitter, or any other social handle"
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 2: Education Background */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gradient mb-6">Education Background</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="highestLevel" className="block text-sm font-medium mb-2">Highest Level of Education*</label>
                        <Dropdown 
                          id="highestLevel"
                          options={educationLevelOptions}
                          value={formState.education.highestLevel}
                          onChange={(value) => handleChange('education', 'highestLevel', value)}
                          placeholder="Select your highest education"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="fieldOfStudy" className="block text-sm font-medium mb-2">Field of Study (If applicable)</label>
                        <input 
                          type="text" 
                          id="fieldOfStudy" 
                          value={formState.education.fieldOfStudy}
                          onChange={(e) => handleChange('education', 'fieldOfStudy', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="e.g. Computer Science, Business, etc."
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 pt-2 pb-4">
                      <input 
                        type="checkbox" 
                        id="currentlyEnrolled"
                        className="mt-1 text-primary focus:ring-primary"
                        checked={formState.education.currentlyEnrolled}
                        onChange={(e) => handleChange('education', 'currentlyEnrolled', e.target.checked)}
                      />
                      <label htmlFor="currentlyEnrolled" className="text-sm cursor-pointer">
                        I am currently enrolled as a student
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium mb-2">Educational Institution (Current or most recent)</label>
                        <input 
                          type="text" 
                          id="institution" 
                          value={formState.education.institution}
                          onChange={(e) => handleChange('education', 'institution', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="Name of school or university"
                        />
                      </div>
                      <div>
                        <label htmlFor="graduationYear" className="block text-sm font-medium mb-2">Graduation Year (Actual or Expected)</label>
                        <input 
                          type="text" 
                          id="graduationYear" 
                          value={formState.education.graduationYear}
                          onChange={(e) => handleChange('education', 'graduationYear', e.target.value)}
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                          placeholder="E.g., 2024"
                        />
                      </div>
                    </div>
                    
                    <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="pt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-primary font-medium mb-1">Note</h4>
                          <p className="text-sm text-foreground/80">
                            Our free full stack web development course is open to students from all educational backgrounds. No prior coding experience or specific education is required.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Interests & Technical Background */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gradient mb-6">Interests & Technical Background</h2>
                    
                    <div>
                      <label htmlFor="whyInterested" className="block text-sm font-medium mb-2">Why are you interested in learning web development?*</label>
                      <textarea 
                        id="whyInterested" 
                        rows={3}
                        required
                        value={formState.interests.whyInterested}
                        onChange={(e) => handleChange('interests', 'whyInterested', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Tell us what sparked your interest in web development"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="careerGoals" className="block text-sm font-medium mb-2">What are your career goals or aspirations?*</label>
                      <textarea 
                        id="careerGoals" 
                        rows={3}
                        required
                        value={formState.interests.careerGoals}
                        onChange={(e) => handleChange('interests', 'careerGoals', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="How do you see web development fitting into your future?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredAreas" className="block text-sm font-medium mb-2">Which areas of web development interest you most?*</label>
                      <Dropdown 
                        id="preferredAreas"
                        options={preferredAreasOptions}
                        value={formState.interests.preferredAreas}
                        onChange={(value) => handleChange('interests', 'preferredAreas', value)}
                        placeholder="Select your primary interest"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="techExperience" className="block text-sm font-medium mb-2">Do you have any previous coding or technical experience?*</label>
                      <textarea 
                        id="techExperience" 
                        rows={3}
                        required
                        value={formState.interests.techExperience}
                        onChange={(e) => handleChange('interests', 'techExperience', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Even if it's minimal or self-taught, tell us about any experience with HTML, CSS, JavaScript, or other technologies"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="projectIdeas" className="block text-sm font-medium mb-2">Do you have any project ideas you&apos;d like to build?</label>
                      <textarea 
                        id="projectIdeas" 
                        rows={3}
                        value={formState.interests.projectIdeas}
                        onChange={(e) => handleChange('interests', 'projectIdeas', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Any websites, apps, or tools you'd like to create during the course?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="learningStyle" className="block text-sm font-medium mb-2">How would you describe your learning style?*</label>
                      <Dropdown 
                        id="learningStyle"
                        options={learningStyleOptions}
                        value={formState.interests.learningStyle}
                        onChange={(value) => handleChange('interests', 'learningStyle', value)}
                        placeholder="Select your learning style"
                        required
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 4: Availability and Preferences */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gradient mb-6">Availability & Commitment</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium mb-2">Earliest Start Date*</label>
                        <DatePicker 
                          id="startDate" 
                          required
                          value={formState.availability.startDate}
                          onChange={(value) => handleChange('availability', 'startDate', value)}
                          placeholder="Select your earliest start date"
                          min={new Date().toISOString().split('T')[0]} // Set minimum date to today
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredSchedule" className="block text-sm font-medium mb-2">Preferred Schedule*</label>
                      <textarea 
                        id="preferredSchedule" 
                        rows={3}
                        required
                        value={formState.availability.preferredSchedule}
                        onChange={(e) => handleChange('availability', 'preferredSchedule', e.target.value)}
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 transition-colors"
                        placeholder="Indicate your preferred days and times for classes (e.g., weekdays, evenings, weekends, specific days)"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="commitmentLevel" className="block text-sm font-medium mb-2">Weekly Time Commitment*</label>
                      <Dropdown 
                        id="commitmentLevel"
                        options={commitmentLevelOptions}
                        value={formState.availability.commitmentLevel}
                        onChange={(value) => handleChange('availability', 'commitmentLevel', value)}
                        placeholder="Select how much time you can commit weekly"
                        required
                      />
                    </div>
                    
                    <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="pt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-primary font-medium mb-1">Important Notice</h4>
                          <p className="text-sm text-foreground/80">
                            All classes are in-person and require physical attendance. The full stack web development course involves both classroom sessions and hands-on practice. Please ensure you can commit to the schedule before proceeding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <Divider className="opacity-30" />
                
                <div className="flex justify-between">
                  {currentStep > 1 ? (
                    <button 
                      onClick={prevStep} 
                      className="bg-background z-0 hover:bg-background/80 border border-primary/30 px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Previous Step
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button onClick={nextStep}
                    className="bg-background z-0 hover:bg-background/80 border border-primary/30 px-4 py-2 rounded-lg cursor-pointer"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button 
                      onClick={handleSubmit}
                      className="px-6 py-3 cursor-pointer bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : 'Submit Application'}
                    </button>
                  )}
                </div>
                
                {submitError && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
                    <p className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {submitError}
                    </p>
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500">
                    <p className="flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Application submitted successfully! We'll be in touch soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </TransitionWrapper>
          
          <RevealOnScroll delay={0.3}>
            <div className="mt-10 text-center text-foreground/70 text-sm">
              <p>Your information is kept confidential and is only used for the application process.</p>
              <p className="mt-2">If you have any questions, please contact us at <a href="mailto:coding@example.com" className="text-primary hover:underline">coding@example.com</a>.</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 