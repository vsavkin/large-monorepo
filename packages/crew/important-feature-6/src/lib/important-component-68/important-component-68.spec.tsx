import { render } from '@testing-library/react';

import ImportantComponent68 from './important-component-68';

describe('ImportantComponent68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent68 />);
    expect(baseElement).toBeTruthy();
  });
});
