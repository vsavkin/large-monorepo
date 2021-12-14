import { render } from '@testing-library/react';

import Icon130 from './icon130';

describe('Icon130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon130 />);
    expect(baseElement).toBeTruthy();
  });
});
