import { render } from '@testing-library/react';

import Alert150 from './alert150';

describe('Alert150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert150 />);
    expect(baseElement).toBeTruthy();
  });
});
