import { render } from '@testing-library/react';

import Alert66 from './alert66';

describe('Alert66', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert66 />);
    expect(baseElement).toBeTruthy();
  });
});
