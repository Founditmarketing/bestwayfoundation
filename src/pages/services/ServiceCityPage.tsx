import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ServiceTemplate from '../../components/ServiceTemplate';
import { getService } from '../../data/services';
import { getLocation } from '../../data/locations';

/** /services/:serviceSlug/:citySlug — the service x city landing pages. */
export default function ServiceCityPage() {
  const { serviceSlug, citySlug } = useParams<{ serviceSlug: string; citySlug: string }>();
  const service = getService(serviceSlug);
  const location = getLocation(citySlug);

  // An unknown city on a known service falls back to the service page rather
  // than a dead end; an unknown service falls back to the services index.
  if (!service) return <Navigate to="/services" replace />;
  if (!location) return <Navigate to={service.path} replace />;

  return <ServiceTemplate service={service} location={location} />;
}
