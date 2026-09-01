import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ServiceTemplate from '../../components/ServiceTemplate';
import { getService } from '../../data/services';

/** /services/:serviceSlug */
export default function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getService(serviceSlug);

  if (!service) return <Navigate to="/services" replace />;

  return <ServiceTemplate service={service} />;
}
