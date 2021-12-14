import { render } from '@testing-library/react';

import Icon58 from './icon58';

describe('Icon58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon58 />);
    expect(baseElement).toBeTruthy();
  });
});
