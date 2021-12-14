import { render } from '@testing-library/react';

import Alert50 from './alert50';

describe('Alert50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert50 />);
    expect(baseElement).toBeTruthy();
  });
});
