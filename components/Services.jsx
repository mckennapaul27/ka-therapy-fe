import React, { Component } from 'react';
import Link from 'next/link';
// const treatments = [
//     {
//         title: 'Depression & Low Mood',
//         img: depression,
//         desc: 'Depression often decreases the quality of life you live. The common symptoms of depression are; sadness, anxiety, panicky, more tired than usual or unable to sleep, angry or frustrated, not getting enjoyment out of life, feeling hopeless or worthless, guilt, not being able to concentrate on everyday things, having suicidal thoughts or thoughts about harming yourself. You may experience some or all of these symptoms. Depression is a common mental health problem which we can all experience at some point throughout our lives. Working with your therapist will allow you to improve your motivation and gain a better quality of life.',
//     },
//     {
//         title: 'Anxiety Disorder',
//         img: anxiety,
//         desc: 'Anxiety can be experienced in many different ways. The common symptoms of anxiety disorders are; uncontrollable racing thoughts, uncontrollable worries, extreme fear triggered by social situations, fear triggered by specific objects, dizziness, sweating, shaking, nausea, palpitations and panic attacks. Anxiety commonly occurs alongside other mental health problems but also by itself. CBT looks at the negative cycles of thoughts and behaviours you may be stuck in which often keeps the anxiety going. You and your therapist will break down your problems allowing an improvement in your anxiety symptoms.',
//     },
//     {
//         title: 'Obsessive Compulsive Disorder (OCD)',
//         img: ocd,
//         desc: 'OCD is a common mental health condition The common symptoms are; obsessive thoughts, compulsive behaviours and unwanted intrusions. Unwanted intrusions can appear as a thought or image which causes distress further leading to the unwanted obsessive thoughts, further leading to the neutralising behaviour to reduce the distress attached to the intrusion. OCD can affect men, women and children, symptoms often start around puberty or early adulthood but not always. CBT will allow you to understand your intrusions and the distress attached. You and your therapist will look at your obsessive compulsive thoughts and behaviours and find alternative evidence allowing for an improvement of your OCD.',
//     },
//     {
//         title: 'Trauma & Post-Traumatic Stress Disorder (PTSD)',
//         img: trauma,
//         desc: 'Any situation which a person finds traumatic can cause PTSD, a few examples are; road accidents, an assault, marriage breakdown, illness/injury or childbirth. The traumatic event causes a psychological or emotional response to the situation. The common symptoms are; reliving the trauma, feeling like the incident is a current threat, experiencing nightmares or flashbacks, difficulty sleeping, fear, isolation, anger and frustration. CBT is recommended by NICE Guidance for the treatment of trauma and PTSD. You and your therapist will explore the traumatic memories allowing for them to be processed, reducing distress and further allowing an improvement of your quality of life.',
//     },

// ];
export default function Box({ disorders }) {
    return (
        <div className='bg-fcfbfb ptb-100 pb-60'>
            <div className='container'>
                <div className='row'>
                    {disorders.map((t, i) => (
                        <div className='col-lg-4 col-sm-6' key={t.id}>
                            <div className='service-card-one'>
                                <img
                                    src={t.attributes.image.data.attributes.url}
                                    alt={
                                        t.attributes.image.data.attributes
                                            .alternativeText
                                    }
                                />
                                <br />
                                <br />
                                <h3>
                                    <a>{t.attributes.title}</a>
                                </h3>
                                <p>{t.attributes.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
