import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col px-2 items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">My ChatGpt</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Everything to me"</p>
            <p className="infoText">
              "What is the difference between a man and a woman?"
            </p>
            <p className="infoText">"What is the shape of the earth?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGpt Model to use</p>
            <p className="infoText">Our Messages are stored in Firestore</p>
            <p className="infoText">
              Hot Toast notification when ChatGPT is thinking
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Can generate incorrect answers</p>
            <p className="infoText">Content may be biased or incorrect</p>
            <p className="infoText">
              Continousely been updated to correct limitation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
