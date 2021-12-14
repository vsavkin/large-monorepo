import { render } from '@testing-library/react';

import SharedAlerts from './shared-alerts';

describe('SharedAlerts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedAlerts />);
    expect(baseElement).toBeTruthy();
  });
});
