import { render } from '@testing-library/react';

import ImportantComponent6 from './important-component-6';

describe('ImportantComponent6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent6 />);
    expect(baseElement).toBeTruthy();
  });
});
