import { render } from '@testing-library/react';

import Alert215 from './alert215';

describe('Alert215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert215 />);
    expect(baseElement).toBeTruthy();
  });
});
