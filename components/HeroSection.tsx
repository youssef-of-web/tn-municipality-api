import { Button } from "./ui/button";

interface HeroSectionProps {
    title: string;
    description: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    className?: string;
}

export function HeroSection({
    title,
    description,
    primaryButtonText = "Try the API",
    secondaryButtonText = "View Documentation",
    onPrimaryClick,
    onSecondaryClick,
    className
}: HeroSectionProps) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 8px' }} className={className}>
            <h1 style={{
                fontSize: 40,
                fontWeight: 800,
                marginBottom: 16,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                {title}
            </h1>
            <p style={{
                fontSize: 18,
                color: '#666',
                marginBottom: 32,
                maxWidth: 600,
                margin: '0 auto 32px'
            }}>
                {description}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button size="lg" onClick={onPrimaryClick}>
                    {primaryButtonText}
                </Button>
                <Button size="lg" variant="outline" onClick={onSecondaryClick}>
                    {secondaryButtonText}
                </Button>
            </div>
        </div>
    );
} 