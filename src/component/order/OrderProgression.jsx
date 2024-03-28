import React from 'react'

export const OrderProgression = ({ selectedOrder }) => {

    const steps = [
        { label: 'order placed'},
        { label: 'processing'},
        { label: 'out for delivery'},
        { label: 'on your way'},
        { label: 'delivered'}
      ];
      
    return (
        <section className="step-wizard">
      <ul className="step-wizard-list text-gray-700 rounded-2xl p-5 z-10">
        {steps.map((step, index) => (
          <li key={index} className={`step-wizard-item ${selectedOrder?.status === step.label ? 'current-item' : ''}`}>
            <span className="progress-count rounded-full h-12 w-12 bg-gray-100 text-gray-700 font-bold" />
            <span className="progress-label mt-2 capitalize" style={{ color: selectedOrder?.status === step.label ? '#000' : '#333' }}>{step.label}</span>
          </li>
        ))}
      </ul>
    </section>
    )
}
