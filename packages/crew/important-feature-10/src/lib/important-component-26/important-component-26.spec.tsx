import { render } from '@testing-library/react';

import ImportantComponent26 from './important-component-26';

describe('ImportantComponent26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent26 />);
    expect(baseElement).toBeTruthy();
  });
});
