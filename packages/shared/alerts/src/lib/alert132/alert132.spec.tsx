import { render } from '@testing-library/react';

import Alert132 from './alert132';

describe('Alert132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert132 />);
    expect(baseElement).toBeTruthy();
  });
});
