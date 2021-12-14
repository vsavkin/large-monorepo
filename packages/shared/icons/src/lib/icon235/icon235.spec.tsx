import { render } from '@testing-library/react';

import Icon235 from './icon235';

describe('Icon235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon235 />);
    expect(baseElement).toBeTruthy();
  });
});
