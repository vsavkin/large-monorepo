import { render } from '@testing-library/react';

import Alert67 from './alert67';

describe('Alert67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert67 />);
    expect(baseElement).toBeTruthy();
  });
});
