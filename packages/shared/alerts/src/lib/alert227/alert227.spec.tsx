import { render } from '@testing-library/react';

import Alert227 from './alert227';

describe('Alert227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert227 />);
    expect(baseElement).toBeTruthy();
  });
});
