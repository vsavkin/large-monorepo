import { render } from '@testing-library/react';

import Alert233 from './alert233';

describe('Alert233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert233 />);
    expect(baseElement).toBeTruthy();
  });
});
