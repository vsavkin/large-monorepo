import { render } from '@testing-library/react';

import Icon144 from './icon144';

describe('Icon144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon144 />);
    expect(baseElement).toBeTruthy();
  });
});
