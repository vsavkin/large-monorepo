import { render } from '@testing-library/react';

import ImportantComponent53 from './important-component-53';

describe('ImportantComponent53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent53 />);
    expect(baseElement).toBeTruthy();
  });
});
