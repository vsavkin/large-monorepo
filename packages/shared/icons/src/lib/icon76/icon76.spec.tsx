import { render } from '@testing-library/react';

import Icon76 from './icon76';

describe('Icon76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon76 />);
    expect(baseElement).toBeTruthy();
  });
});
