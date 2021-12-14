import { render } from '@testing-library/react';

import Icon20 from './icon20';

describe('Icon20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon20 />);
    expect(baseElement).toBeTruthy();
  });
});
