import { render } from '@testing-library/react';

import ImportantComponent218 from './important-component-218';

describe('ImportantComponent218', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent218 />);
    expect(baseElement).toBeTruthy();
  });
});
