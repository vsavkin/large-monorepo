import { render } from '@testing-library/react';

import Dialog50 from './dialog50';

describe('Dialog50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog50 />);
    expect(baseElement).toBeTruthy();
  });
});
